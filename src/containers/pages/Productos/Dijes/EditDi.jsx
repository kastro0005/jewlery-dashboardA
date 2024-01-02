import { get_dije } from "redux/actions/Dijes/dijes";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditDi({ get_dije, dije }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_dije(id);
  }, [get_dije, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Dijes</title>
        </Helmet>
        {dije ? (
          <>
           <Header element={dije} prod={"dije"} Prod={"Dije"}/>
           <Edit prod={dije} Prod={"Dije"} element={get_dije}/>
          </>
        ) : (
          <>
          <Loading/>
          </>
        )}
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  dije: state.dijes.dije,
});
export default connect(mapStateToProps, {
  get_dije,
})(EditDi);
