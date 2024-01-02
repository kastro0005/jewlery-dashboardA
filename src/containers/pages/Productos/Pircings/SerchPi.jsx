import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_pircings_page,get_search_pircings } from "redux/actions/Pircings/pircings";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchPi({get_search_pircings_page,get_search_pircings,search_pircings ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_pircings(searchTerm);
 }, [get_search_pircings,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Pircings</title>
        </Helmet>
        <HeaderSearch Element="Pircings" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_pircings_page} list={search_pircings&&search_pircings} count={count}/>          
        
        {search_pircings&&search_pircings.length>0 ? 
        (
          <>
          <List prod={search_pircings&&search_pircings} Prod={"Pircing"} Prods={"Pircings"} Pr={"Pi"}/>
        
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
    search_pircings: state.pircings.search_pircings,
  count: state.pircings.count,
  next: state.pircings.next,
  previous: state.pircings.previous,
});
export default connect(mapStateToProps, {
  get_search_pircings,
  get_search_pircings_page
})(SearchPi);
