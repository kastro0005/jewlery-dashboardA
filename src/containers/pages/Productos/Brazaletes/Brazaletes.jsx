import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { get_brazaletesadmin,get_brazaletesadmin_pages } from "redux/actions/Brazaletes/brazaletes";
import List from "components/List/List";
import SmallSetPagination from "components/Pagination/SmallSetPagination";
import Header from "components/Header/Header";

function Brazaletes({ get_brazaletesadmin,get_brazaletesadmin_pages, brazaletesadmin,countadmin,next,previous }) {
  useEffect(() => {
    get_brazaletesadmin();
  }, [get_brazaletesadmin]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Brazaletes</title>
        </Helmet>
        <Header Element="Brazalete" list={get_brazaletesadmin}/>
        <SmallSetPagination list_page={get_brazaletesadmin_pages} list={brazaletesadmin&&brazaletesadmin} count={countadmin}/>          
        <List prod={brazaletesadmin && brazaletesadmin} Prod={"Brazalete"} Prods={"Brazaletes"} Pr={"Br"}/>
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  brazaletesadmin: state.brazaletes.brazaletesadmin,
  countadmin: state.brazaletes.countadmin,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_brazaletesadmin,
  get_brazaletesadmin_pages
})(Brazaletes);
