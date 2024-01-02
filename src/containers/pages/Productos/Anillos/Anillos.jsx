import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_anillosadmin,get_anillosadmin_pages } from "redux/actions/Anillos/anillos";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Anillos({ get_anillosadmin,get_anillosadmin_pages, anillosadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_anillosadmin();
  }, [get_anillosadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Anillos</title>
        </Helmet>
        <Header Element="Anillo" list={get_anillosadmin}/>
        <SmallSetPagination list_page={get_anillosadmin_pages} list={anillosadmin&&anillosadmin} count={countadmin}/>
        <List prod={anillosadmin && anillosadmin} Prod={"Anillo"} Prods={"Anillos"} Pr={"An"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  anillosadmin: state.anillos.anillosadmin,
  countadmin: state.anillos.countadmin,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_anillosadmin,
  get_anillosadmin_pages
})(Anillos);
