import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_dijes_page,get_search_dijes } from "redux/actions/Dijes/dijes";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchDi({get_search_dijes_page,get_search_dijes,search_dijes ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_dijes(searchTerm);
 }, [get_search_dijes,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Dijes</title>
        </Helmet>
        <HeaderSearch Element="Dijes" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_dijes_page} list={search_dijes&&search_dijes} count={count}/>          
        
        {search_dijes&&search_dijes.length>0 ? 
        (
          <>
          <List prod={search_dijes&&search_dijes} Prod={"Dije"} Prods={"Dijes"} Pr={"Di"}/>
        
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
    search_dijes: state.dijes.search_dijes,
  count: state.dijes.count,
  next: state.dijes.next,
  previous: state.dijes.previous,
});
export default connect(mapStateToProps, {
  get_search_dijes,
  get_search_dijes_page
})(SearchDi);
