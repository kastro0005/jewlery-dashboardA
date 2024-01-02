import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_aretes_page,get_search_aretes } from "redux/actions/Aretes/aretes";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchAr({get_search_aretes_page,get_search_aretes,search_aretes ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_aretes(searchTerm);
 }, [get_search_aretes,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Aretes</title>
        </Helmet>
        <HeaderSearch Element="Aretes" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_aretes_page} list={search_aretes&&search_aretes} count={count}/>          
        
        {search_aretes&&search_aretes.length>0 ? 
        (
          <>
          <List prod={search_aretes&&search_aretes} Prod={"Arete"} Prods={"Aretes"} Pr={"Ar"}/>
        
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
  search_aretes: state.aretes.search_aretes,
  count: state.aretes.count,
  next: state.aretes.next,
  previous: state.aretes.previous,
});
export default connect(mapStateToProps, {
  get_search_aretes,
  get_search_aretes_page
})(SearchAr);
