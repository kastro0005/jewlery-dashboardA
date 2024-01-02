import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_dijesadmin,get_dijesadmin_pages } from "redux/actions/Dijes/dijes";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Dijes({ get_dijesadmin,get_dijesadmin_pages, dijesadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_dijesadmin();
  }, [get_dijesadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Dijes</title>
        </Helmet>
        <Header Element="Dije" list={get_dijesadmin}/>
        <SmallSetPagination list_page={get_dijesadmin_pages} list={dijesadmin&&dijesadmin} count={countadmin}/>          
        <List prod={dijesadmin && dijesadmin} Prod={"Dije"} Prods={"Dijes"} Pr={"Di"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  dijesadmin: state.dijes.dijesadmin,
  countadmin: state.dijes.countadmin,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_dijesadmin,
  get_dijesadmin_pages
})(Dijes);
