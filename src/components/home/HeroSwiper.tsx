import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { homeSlides } from "../../data/homeSlides"
import { useLanguage } from "../../hooks/useLanguage"

export default function HeroSwiper() {
  const { t } = useLanguage()

  return (
    <div className="mt-14">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.8,
          },
        }}
        className="home-hero-swiper"
      >
        {homeSlides.map((slide, index) => {
          const project = t.projectContent[slide.slug]

          return (
          <SwiperSlide key={slide.slug}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-black p-8 md:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

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
                  <a
                    href="/projects"
                    className="rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
                  >
                    {t.common.viewProjects}
                  </a>

                  <a
                    href="/contact"
                    className="rounded-2xl border border-white/10 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    {t.common.startProject}
                  </a>
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
