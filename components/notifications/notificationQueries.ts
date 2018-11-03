import { gql } from "apollo-boost";

export const GET_NOTIFICATIONS = gql`
  query getNotifications {
    GetNotifications {
      ok
      notifications {
        id
        actor
        target
        verb
        object
        time
        isSeen
      }
      unseen
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation markAsRead {
    MarkAsRead {
      ok
    }
  }
`;
