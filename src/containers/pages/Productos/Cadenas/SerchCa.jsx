import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_cadenas_page,get_search_cadenas } from "redux/actions/Cadenas/cadenas";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchCa({get_search_cadenas_page,get_search_cadenas,search_cadenas ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_cadenas(searchTerm);
 }, [get_search_cadenas,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Cadenas</title>
        </Helmet>
        <HeaderSearch Element="Cadenas" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_cadenas_page} list={search_cadenas&&search_cadenas} count={count}/>          
        
        {search_cadenas&&search_cadenas.length>0 ? 
        (
          <>
          <List prod={search_cadenas&&search_cadenas} Prod={"Cadena"} Prods={"Cadenas"} Pr={"Ca"}/>
        
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
    search_cadenas: state.cadenas.search_cadenas,
  count: state.cadenas.count,
  next: state.cadenas.next,
  previous: state.cadenas.previous,
});
export default connect(mapStateToProps, {
  get_search_cadenas,
  get_search_cadenas_page
})(SearchCa);
