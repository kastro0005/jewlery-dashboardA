import { get_pircing } from "redux/actions/Pircings/pircings";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditPi({ get_pircing, pircing }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_pircing(id);
  }, [get_pircing, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Pircings</title>
        </Helmet>
        {pircing ? (
          <>
           <Header element={pircing} prod={"pircing"} Prod={"Pircing"}/>
           <Edit prod={pircing} Prod={"Pircing"} element={get_pircing}/>
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
  pircing: state.pircings.pircing,
});
export default connect(mapStateToProps, {
  get_pircing,
})(EditPi);
