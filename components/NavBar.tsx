"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { name: "Accueil", id: "accueil" },
  { name: "Compétences", id: "competences" },
  { name: "Parcours", id: "parcours" },
  { name: "Projets", id: "projets" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    setOpen(false);
    setActive(id);

    setTimeout(() => {
      const position =
        element.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav
      className={`
        fixed
        top-4
        left-1/2
        -translate-x-1/2

        w-[90%]
        max-w-4xl

        z-50

        rounded-2xl

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-emerald-900/20"
            : "bg-slate-950/60 backdrop-blur-md border border-white/5"
        }
      `}
    >
      <div
        className="
          h-14
          px-5

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <a
          href="#accueil"
          onClick={(e) => goTo(e, "accueil")}
          className="
            text-xl
            font-bold

            bg-gradient-to-r
            from-white
            via-emerald-100
            to-emerald-400

            bg-clip-text
            text-transparent
          "
        >
          Raphaël Verchain
        </a>

        {/* Desktop menu */}

        <div
          className="
            hidden
            md:flex

            items-center
            gap-1

            bg-white/5
            rounded-full
            p-1
          "
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => goTo(e, item.id)}
              className={`
                px-4
                py-2

                rounded-full

                text-sm

                transition-all

                ${
                  active === item.id
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Burger */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            md:hidden

            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-lg

            text-emerald-400
            text-xl

            hover:bg-white/10

            transition
          "
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              md:hidden

              border-t
              border-white/10

              px-5
              py-4

              flex
              flex-col

              gap-2
            "
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goTo(e, item.id)}
                className={`
                  px-3
                  py-2

                  rounded-lg

                  text-sm

                  transition

                  ${
                    active === item.id
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "text-slate-300 hover:bg-white/5"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
