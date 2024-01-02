import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_aretesadmin,get_aretesadmin_pages } from "redux/actions/Aretes/aretes";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Aretes({ get_aretesadmin,get_aretesadmin_pages, aretesadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_aretesadmin();
  }, [get_aretesadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Aretes</title>
        </Helmet>
        <Header Element="Arete" list={get_aretesadmin}/>
        <SmallSetPagination list_page={get_aretesadmin_pages} list={aretesadmin&&aretesadmin} count={countadmin}/>          
        <List prod={aretesadmin && aretesadmin} Prod={"Arete"} Prods={"Aretes"} Pr={"Ar"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  aretesadmin: state.aretes.aretesadmin,
  countadmin: state.aretes.countadmin,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_aretesadmin,
  get_aretesadmin_pages
})(Aretes);
