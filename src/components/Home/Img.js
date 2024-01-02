import { connect } from "react-redux";
import { ImgDash } from "components/img/Images";

function Img({
  countAn,
  countAr,
  countBr,
  countTo,
  countCa,
  countDi,
  countPi,
}) {
  const Total =
    countAn + countAr + countBr + countTo + countCa + countDi + countPi;
  const stats = [
    {
      name: "Productos en total",
      value: Total,
    },
  ];
  const links = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@yanis_jewelry?_t=8gv4cyFGjzR&_r=1",
    },
    {
      name: "Clapper",
      href: "https://clapperapp.com/Anita.el21?is_invite=1&r=e6gnVpK3oG&c=in&m=co",
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=18136387962&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 h-auto w-auto">
        <img
          src={ImgDash}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true">
          <div
            className="aspect-[1097/845] w-[68.5625rem]  opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center ">
            <h2 className="text-7xl font-bold  text-black ">
              Jewelry Management Site
            </h2>
          </div>
          <div className="mt-80">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-black">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex gap-x-8 gap-y-6 text-base font-semibold  text-black ">
              <a
                href={`${process.env.REACT_APP_URL}/`}
                target="_blank"
                rel="noreferrer">
                ir a la Web <span aria-hidden="true">&rarr;</span>
              </a>
              <span>Redes Sociales:</span>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Img);
