import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_cadenasadmin,get_cadenasadmin_pages } from "redux/actions/Cadenas/cadenas";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Cadenas({ get_cadenasadmin,get_cadenasadmin_pages, cadenasadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_cadenasadmin();
  }, [get_cadenasadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Cadenas</title>
        </Helmet>
        <Header Element="Cadena" list={get_cadenasadmin}/>
        <SmallSetPagination list_page={get_cadenasadmin_pages} list={cadenasadmin&&cadenasadmin} count={countadmin}/>          
        <List prod={cadenasadmin && cadenasadmin}Prod={"Cadena"}Prods={"Cadenas"}Pr={"Ca"} />
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cadenasadmin: state.cadenas.cadenasadmin,
  countadmin: state.cadenas.countadmin,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_cadenasadmin,
  get_cadenasadmin_pages
})(Cadenas);
