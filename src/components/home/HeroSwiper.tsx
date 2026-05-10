import { Link } from "react-router-dom"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { homeSlides } from "../../data/homeSlides"
import { useLanguage } from "../../hooks/useLanguage"

export default function HeroSwiper() {
  const { t } = useLanguage()

  return (
    <div className="mt-14">
      <Swiper
        modules={[Navigation, Pagination]}
        grabCursor
        centeredSlides
        initialSlide={1}
        slidesPerView={1.05}
        spaceBetween={18}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.45,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.6,
            spaceBetween: 28,
          },
        }}
        className="home-hero-swiper"
      >
        {homeSlides.map((slide, index) => {
          const project = t.projectContent[slide.slug]

          return (
            <SwiperSlide key={slide.slug}>
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black p-8 md:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

                <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
                  <div>
                    <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-blue-200">
                      {t.common.featured} 0{index + 1}
                    </span>

                    <h2 className="mt-8 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 text-lg font-semibold text-blue-200">
                      {slide.subtitle}
                    </p>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to="/projects"
                      draggable={false}
                      className="rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
                    >
                      {t.common.viewProjects}
                    </Link>

                    <Link
                      to="/contact"
                      draggable={false}
                      className="rounded-2xl border border-white/10 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                    >
                      {t.common.startProject}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
