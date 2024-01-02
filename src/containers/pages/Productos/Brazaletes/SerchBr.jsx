import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import {get_search_brazaletes_page,get_search_brazaletes } from "redux/actions/Brazaletes/brazaletes";
import List from "components/List/List";
import { useParams } from "react-router-dom";
import HeaderSearch from "components/Header/HeaderSer";
import AlertImage from "components/Header/AlertImage";
import SmallSetPaginationSer from "components/Pagination/SmallSetPaginationSer";

function SearchBr({get_search_brazaletes_page,get_search_brazaletes,search_brazaletes ,count,next,previous }) {

    const params = useParams()
    const searchTerm = params.searchTerm
 useEffect(() => {
     get_search_brazaletes(searchTerm);
 }, [get_search_brazaletes,searchTerm]);


  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin | Brazaletes</title>
        </Helmet>
        <HeaderSearch Element="Brazaletes" element={searchTerm}/>
        <SmallSetPaginationSer Prod={searchTerm} list_page={get_search_brazaletes_page} list={search_brazaletes&&search_brazaletes} count={count}/>          
        
        {search_brazaletes&&search_brazaletes.length>0 ? 
        (
          <>
          <List prod={search_brazaletes&&search_brazaletes} Prod={"Brazalete"} Prods={"Brazaletes"} Pr={"Br"}/>
        
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
    search_brazaletes: state.brazaletes.search_brazaletes,
  count: state.brazaletes.count,
  next: state.brazaletes.next,
  previous: state.brazaletes.previous,
});
export default connect(mapStateToProps, {
  get_search_brazaletes,
  get_search_brazaletes_page
})(SearchBr);
