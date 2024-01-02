import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_pircingsadmin,get_pircingsadmin_pages } from "redux/actions/Pircings/pircings";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Pircings({ get_pircingsadmin,get_pircingsadmin_pages, pircingsadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_pircingsadmin();
  }, [get_pircingsadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Pircings</title>
        </Helmet>
        <Header Element="Pircing" list={get_pircingsadmin}/>
        <SmallSetPagination list_page={get_pircingsadmin_pages} list={pircingsadmin&&pircingsadmin} count={countadmin}/>          
        <List prod={pircingsadmin && pircingsadmin} Prod={"Pircing"} Prods={"Pircings"} Pr={"Pi"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  pircingsadmin: state.pircings.pircingsadmin,
  countadmin: state.pircings.countadmin,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_pircingsadmin,
  get_pircingsadmin_pages
})(Pircings);
