import Header from "../../components/Header/Header";
import classes from "./Contacts.module.scss";
import contactsImage from "../../assets/contacts.jpg";

function Contacts() {
  return (
    <>
      <div className={classes.Contacts}>
        <Header image={contactsImage} title="Contacts">
          If you're just getting started with React generally, we recommend you follow the excellent Getting Started guide in the official docs. There is plenty of information there to get you up and running. React Router is compatible with React = 16.8.
        </Header>
      </div>
    </>
  );
}

export default Contacts;