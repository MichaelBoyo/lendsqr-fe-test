import axios from "axios";

export interface UserResponse {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: { [key: string]: string };
  guarantor: { [key: string]: string };
  accountBalance: string;
  accountNumber: string;
  socials: { [key: string]: string };
  id: string;
}
export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    if (response.status === 200) {
      const data: Array<UserResponse> = response.data.map((d: object) => {
        return { ...d };
      });

      return data;
    }
  } catch (error) {
    return [];
  }
};
