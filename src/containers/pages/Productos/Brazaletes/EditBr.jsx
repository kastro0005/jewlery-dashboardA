import { get_brazalete } from "redux/actions/Brazaletes/brazaletes";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditBr({ get_brazalete, brazalete }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_brazalete(id);
  }, [get_brazalete, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Brazaletes</title>
        </Helmet>
        {brazalete ? (
          <>
           <Header element={brazalete} prod={"brazalete"} Prod={"Brazalete"}/>
           <Edit prod={brazalete} Prod={"Brazalete"} element={get_brazalete}/>
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
  brazalete: state.brazaletes.brazalete,
});
export default connect(mapStateToProps, {
  get_brazalete,
})(EditBr);
