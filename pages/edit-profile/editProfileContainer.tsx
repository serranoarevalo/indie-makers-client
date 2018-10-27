import React from "react";
import { Query, Mutation, MutationFn } from "react-apollo";
import CompleteProfilePresenter from "./editProfilePresenter";
import { getMe, editProfile, editProfileVariables } from "../../types/api";
import { GET_ME } from "../../sharedQueries";
import { EDIT_USER } from "./editProfileQueries";
import { toast } from "react-toastify";

interface IState {
  id: number;
  homepage: string | undefined | null;
  bio: string | undefined | null;
  username: string | undefined | null;
  currentHomepage: string | undefined | null;
  currentBio: string | undefined | null;
  currentUsername: string | undefined | null;
}

class MeQuery extends Query<getMe> {}
class EditProfileMutation extends Mutation<editProfile, editProfileVariables> {}

export default class CompleteProfileContainer extends React.Component<
  {},
  IState
> {
  public editUser: MutationFn<editProfile, editProfileVariables>;
  state = {
    homepage: "",
    bio: "",
    id: 0,
    username: "",
    currentHomepage: "",
    currentBio: "",
    currentUsername: ""
  };
  render() {
    const { homepage, bio, username } = this.state;
    return (
      <MeQuery
        query={GET_ME}
        fetchPolicy={"cache-and-network"}
        onCompleted={this.handleMeQuery}
      >
        {() => (
          <EditProfileMutation
            variables={{ username, bio, homepage }}
            mutation={EDIT_USER}
            onCompleted={this.handleOnComplete}
            refetchQueries={[{ query: GET_ME }]}
          >
            {editUser => {
              this.editUser = editUser;
              return (
                <CompleteProfilePresenter
                  homepage={homepage}
                  bio={bio}
                  username={username}
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                />
              );
            }}
          </EditProfileMutation>
        )}
      </MeQuery>
    );
  }
  public handleMeQuery = (data: {} | getMe) => {
    if ("Me" in data) {
      const {
        Me: { user }
      } = data;
      if (user) {
        const { homepage, bio, username, id } = user;
        this.setState({
          id,
          homepage,
          bio,
          username,
          currentHomepage: homepage,
          currentBio: bio,
          currentUsername: username
        });
      }
    }
  };
  public handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value, name }
    } = event;

    if (name === "username") {
      this.setState({
        [name]: value.toLowerCase().replace(" ", ".")
      } as any);
    } else {
      this.setState({
        [name]: value
      } as any);
    }
  };
  public handleSubmit = () => {
    const { username } = this.state;
    if (username === "") {
      toast.error("Username can't be empty");
    }
    this.editUser();
  };
  public handleOnComplete = (data: {} | editProfile) => {
    if (data && "EditUser" in data) {
      const {
        EditUser: { ok, error }
      } = data;
      if (!ok && error) {
        toast.error(error);
        this.setState(prev => {
          return {
            homepage: prev.currentHomepage,
            bio: prev.currentBio,
            username: prev.currentUsername
          };
        });
        return;
      } else {
        toast.success("Profile Updated");
      }
    }
  };
}
