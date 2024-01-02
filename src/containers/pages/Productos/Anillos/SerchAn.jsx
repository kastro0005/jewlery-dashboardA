import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_anillos_page,get_search_anillos } from "redux/actions/Anillos/anillos";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchAn({get_search_anillos_page,get_search_anillos,search_anillos ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_anillos(searchTerm);
 }, [get_search_anillos,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Anillos</title>
        </Helmet>
        <HeaderSearch Element="Anillos" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_anillos_page} list={search_anillos&&search_anillos} count={count}/>          
        
        {search_anillos&&search_anillos.length>0 ? 
        (
          <>
          <List prod={search_anillos&&search_anillos} Prod={"Anillo"} Prods={"Anillos"} Pr={"An"}/>
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
  search_anillos: state.anillos.search_anillos,
  count: state.anillos.count,
  next: state.anillos.next,
  previous: state.anillos.previous,
});
export default connect(mapStateToProps, {
  get_search_anillos,
  get_search_anillos_page
})(SearchAn);
