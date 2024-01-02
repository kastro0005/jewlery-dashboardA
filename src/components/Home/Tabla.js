import { connect } from "react-redux";

function Tabla({
  countAn,
  countAr,
  countBr,
  countTo,
  countCa,
  countDi,
  countPi,
  countAdAn,
  countAdAr,
  countAdBr,
  countAdTo,
  countAdCa,
  countAdDi,
  countAdPi,
}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-hidden ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                <thead className="text-black border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-0 py-4 dark:border-neutral-500 ">
                      Productos
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500">
                      Cantidad en la Web
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500">
                      Cantidad Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Anillos
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAn}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdAn}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Aretes
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAr}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdAr}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Cadenas
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countCa}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdCa}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Brazaletes
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countBr}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdBr}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Tobilleras
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countTo}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdTo}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Pircings
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countPi}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdPi}
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      Dijes
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countDi}
                    </td>
                    <td className="blatext-blackspace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      {countAdDi}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Tabla);
