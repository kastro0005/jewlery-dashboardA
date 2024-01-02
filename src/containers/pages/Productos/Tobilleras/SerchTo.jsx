import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_tobilleras_page,get_search_tobilleras } from "redux/actions/Tobilleras/tobilleras";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchTo({get_search_tobilleras_page,get_search_tobilleras,search_tobilleras ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_tobilleras(searchTerm);
 }, [get_search_tobilleras,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Tobilleras</title>
        </Helmet>
        <HeaderSearch Element="Tobilleras" element={searchTerm}/>
        <SmallSetPaginationSer list_page={get_search_tobilleras_page} list={search_tobilleras&&search_tobilleras} count={count} Prod={searchTerm}/>          
        
        {search_tobilleras&&search_tobilleras.length>0 ? 
        (
          <>
          <List prod={search_tobilleras&&search_tobilleras} Prod={"Tobillera"} Prods={"Tobilleras"} Pr={"To"}/>
        
        </>
        ):(
          <>
          <AlertImage /> 
        </>
        )}
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  search_tobilleras: state.tobilleras.search_tobilleras,
  count: state.tobilleras.count,
  next: state.tobilleras.next,
  previous: state.tobilleras.previous,
});
export default connect(mapStateToProps, {
  get_search_tobilleras,
  get_search_tobilleras_page
})(SearchTo);
