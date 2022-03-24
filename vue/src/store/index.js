import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The SathiSoft Youtube Channel content",
    slug: "thesathisoft-youtube-channel-content",
    status: "draft",
    image:
      "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description:
      "My name is Rajan Dangi.<br>I am web developer with 4+ years of experience, free educational content creater",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-20 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From Which country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "cd41294a-afb0-11df-bc9b-00241dd75637",
              text: "USA",
            },
            {
              uuid: "cd41294a-afb0-11df-bc9b-bbc850536440",
              text: "Georgia",
            },
            {
              uuid: "cd41294a-afb0-11df-bc9b-00132cc65648",
              text: "Germany",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "This is checkbox question?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur voluptatem optio? Natus, totam quod!",
        data: {
          options: [
            {
              uuid: "cd41294a-afb0-11df-bc9b-00241dd55637",
              text: "Javascript",
            },
            {
              uuid: "cd41374a-afb0-11df-bc9b-bbc850536440",
              text: "HTML + CSS",
            },
            {
              uuid: "cd41294b-afb0-12df-bc9b-00132cc65648",
              text: "PHP",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "This is checkbox question?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur optio? Natus, totam quod!",
        data: {
          options: [
            {
              uuid: "cd41294a-afb0-11df-bc9b-00242dd55637",
              text: "Wordpress",
            },
            {
              uuid: "dd41374a-afb0-11df-bc9b-bbc850536440",
              text: "HTML5 + CSS",
            },
            {
              uuid: "fd41294b-afb0-12df-bc9b-00132cc65648",
              text: "Laravel",
            },
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "This is radio question?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur optio! Natus, totam quod!",
        data: {
          options: [
            {
              uuid: "cd41294a-afb0-11df-cb9b-00242dd55637",
              text: "Wordpress8.1",
            },
            {
              uuid: "dd41374a-afb0-11fd-bc9b-bbc850536440",
              text: "HTML5 + CSS3",
            },
            {
              uuid: "fd42194b-afb0-12df-bc9b-00132cc65648",
              text: "Laravel 9",
            },
            {
              id: 5,
              type: "text",
              question: "What's your favourite Youtube channel?",
              description: null,
              data: {},
            },
            {
              id: 6,
              type: "textarea",
              question:
                "What do you think about Sathisoft Academy Youtube channel?",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, velit architecto autem, nesciunt inventore provident atque, explicabo suscipit illum nemo at quo quaerat id a.",
              data: {},
            },
          ],
        },
      },
    ],
  },
  {
    id: 200,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image:
      "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description:
      "Vue is a progressive framework for building front-end of the website",
    created_at: "2021-12-20 17:00:00",
    updated_at: "2021-12-20 17:00:00",
    expire_date: "2021-12-20 17:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image:
      "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description: "A utility first CSS framework packed with classes like ..",
    created_at: "2021-12-20 14:00:00",
    updated_at: "2021-12-20 14:00:00",
    expire_date: "2021-12-20 14:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
