<template>
  <div class="home">
    <div class="grid grid-cols-2 items-center">
      <div class="flex flex-col items-start h-3/4 w-3/4 m-auto">
        <div
          class="flex flex-row bg-blue-600 mb-12 text-white px-4 rounded py-2 self-center select-none"
        >
          <img src="../../public/images/Logo2.png" class="h-8 mr-2" alt="" />
          <h1 class="text-2xl">M.therapy</h1>
        </div>
        <div class="text-left mb-8">
          <h2 class="text-4xl font-bold mb-4">Log in</h2>
          <p>Welecome back! Please enter your details.</p>
        </div>
        <form class="w-full">
          <div class="flex flex-col items-start mb-4">
            <label for="" class="font-bold">Email</label>
            <input
              type="email"
              name=""
              id=""
              class="rounded placeholder:text-sm w-full py-1 pl-2 border border-slate-300 outline-none outline-offset-0 outline-1 focus:outline-blue-400 transition-all duration-400"
              placeholder="Enter your email"
            />
          </div>
          <div class="flex flex-col items-start">
            <label for="" class="font-bold">Password</label>
            <input
              type="password"
              name=""
              id=""
              class="rounded w-full py-1 pl-2 border border-slate-300 outline-none outline-offset-0 outline-1 focus:outline-blue-400 transition-all duration-300"
            />
          </div>
          <div class="w-full flex flex-row justify-between mt-2">
            <div class="flex flex-row items-center">
              <input
                type="checkbox"
                name=""
                id=""
                class="mr-2 accent-blue-600"
              />
              <p>Remember for 30 days</p>
            </div>
            <div>
              <a href="" class="text-blue-900 font-semibold">Forgot password</a>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white rounded py-2 my-4">
            Sign in
          </button>
          <p>
            Don`t have an account?
            <a href="" class="text-blue-900 font-semibold">Sign up</a>
          </p>
        </form>
      </div>

      <div class="bg-blue-500 h-screen flex flex-col">
        <div class="h-3/4 m-auto w-full">
          <div class="m-auto">
            <Flicking
              ref="flicking"
              :options="{ circular: true }"
              :plugins="plugins"
            >
              <div class="w-full card-panel">
                <img
                  src="../../public/images/Hero.png"
                  alt=""
                  class="max-w-[250px] max-h-[350px] m-auto"
                />
                <div class="w-3/4 m-auto text-white mt-12">
                  <h2 class="font-semibold capitalize text-3xl">GET STARTED</h2>
                  <p class="font-extralight text-gray-50 text-base">
                    Simply answer a few questions to help us understand you
                  </p>
                </div>
              </div>
              <div class="w-full card-panel">
                <img
                  src="../../public/images/therapist.png"
                  alt=""
                  class="max-w-[250px] max-h-[350px] m-auto"
                />
                <div class="w-3/4 m-auto text-white mt-12">
                  <h2 class="font-semibold capitalize text-3xl">
                    THERAPIST MATCH
                  </h2>
                  <p class="font-extralight text-gray-50 text-base">
                    We will contact you to provide you with information
                  </p>
                </div>
              </div>
              <div class="w-full card-panel">
                <img
                  src="../../public/images/1.png"
                  alt=""
                  class="max-w-[250px] max-h-[350px] m-auto"
                />
                <div class="w-3/4 m-auto text-white mt-12">
                  <h2 class="font-semibold capitalize text-3xl">
                    AT YOUR CONVENIENCE
                  </h2>
                  <p class="font-extralight text-gray-50 text-base">
                    Feel cosy at your own place and have your session whenever
                    you want
                  </p>
                </div>
              </div>
              <template #viewport>
                <div class="flicking-pagination text-2xl"></div>
              </template>
            </Flicking>
            <div class="mt-5">
              <button
                class="bg-white px-4 py-1 rounded mr-7 font-bold shadow-md shadow-black active:bg-blue-600 active:text-white transition-all"
                @click="prev"
              >
                Prev
              </button>
              <button
                class="bg-white px-4 py-1 rounded font-bold shadow-md shadow-black active:bg-blue-600 active:text-white transition-all"
                @click="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { Pagination } from "@egjs/flicking-plugins";
import { Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

export default {
  name: "HomeView",
  components: { Flicking: Flicking },
  mounted() {
    console.log(this.$refs.flicking.panelCount);
    console.log(this.$refs.flicking.visiblePanels);
  },
  data() {
    return {
      plugins: [
        new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),
        new Pagination({ type: "fraction" }),
        new Fade(),
      ],
    };
  },
  methods: {
    next() {
      this.$refs.flicking.next();
    },
    prev() {
      this.$refs.flicking.prev();
    },
    next1() {
      this.$refs.flicking.next();
      let wew = this.$refs.flicking.visiblePanels;
      let wews = wew[wew.length - 1];
      if (wews._index == this.$refs.flicking.panelCount - 1) {
        alert("وين تريد تروح بعد");
      }
    },
    prev1() {
      this.$refs.flicking.prev();
    },
    moveTolast() {
      this.$refs.flicking.moveTo(this.$refs.flicking.panelCount - 1);
    },
  },
};
</script>

<style>
@import url("@egjs/vue3-flicking/dist/flicking.css");
</style>
