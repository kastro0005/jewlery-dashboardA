import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_tobillerasadmin,get_tobillerasadmin_pages } from "redux/actions/Tobilleras/tobilleras";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Tobilleras({ get_tobillerasadmin,get_tobillerasadmin_pages, tobillerasadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_tobillerasadmin();
  }, [get_tobillerasadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Tobilleras</title>
        </Helmet>
        <Header Element="Tobillera" list={get_tobillerasadmin}/>
        <SmallSetPagination list_page={get_tobillerasadmin_pages} list={tobillerasadmin&&tobillerasadmin} count={countadmin}/>          
        <List prod={tobillerasadmin && tobillerasadmin} Prod={"Tobillera"} Prods={"Tobilleras"} Pr={"To"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  tobillerasadmin: state.tobilleras.tobillerasadmin,
  countadmin: state.tobilleras.countadmin,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_tobillerasadmin,
  get_tobillerasadmin_pages
})(Tobilleras);
