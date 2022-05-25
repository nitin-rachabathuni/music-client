<template>
  <main class="bg-[#e9e9e9] px-[12%] py-5 min-h-screen grid items-center">
    <div class="main-content">
      <div
        class="left-nav-container rounded-l-3xl text-gray-500 col-span-1 bg-white"
      >
        <div class="p-6">
          <div class="flex justify-between items-center">
            <i class="fas fa-stream js-hide-navbar cursor-pointer"></i>
          </div>
          <div class="logo py-7 text-center">
            <img src="../assets/logo.png" width="180px" />
          </div>
          <nav class="relative" data-v-50279bc2="">
            <li data-v-50279bc2="">
              <a href="#" data-v-50279bc2=""
                ><i class="fas fa-home" data-v-50279bc2=""></i>Home</a
              >
            </li>
            <li data-v-50279bc2="">
              <a href="#" data-v-50279bc2=""
                ><i class="fas fa-chart-line" data-v-50279bc2=""></i>Trend</a
              >
            </li>
            <li data-v-50279bc2="">
              <a href="#" data-v-50279bc2=""
                ><i class="far fa-compass" data-v-50279bc2=""></i>Feed</a
              >
            </li>
          </nav>
          <nav class="relative" data-v-50279bc2="">
            <p class="text-[#9ca3af] text-xs" data-v-50279bc2="">Discover</p>
            <ul data-v-50279bc2="">
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="far fa-newspaper" data-v-50279bc2=""></i>New and
                  Notable</a
                >
              </li>
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="far fa-calendar-alt" data-v-50279bc2=""></i>Realese
                  Calendar</a
                >
              </li>
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="fas fa-ticket-alt" data-v-50279bc2=""></i>Events</a
                >
              </li>
            </ul>
          </nav>
          <nav class="relative" data-v-50279bc2="">
            <p class="text-[#9ca3af] text-xs" data-v-50279bc2="">
              Your Collection
            </p>
            <ul data-v-50279bc2="">
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="far fa-heart" data-v-50279bc2=""></i>Favorite
                  Songs</a
                >
              </li>
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="far fa-user" data-v-50279bc2=""></i>Artist</a
                >
              </li>
              <li data-v-50279bc2="">
                <a href="#" data-v-50279bc2=""
                  ><i class="far fa-star" data-v-50279bc2=""></i>Albums</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="navbar-user flex justify-between items-center p-5 border-1 border-solid border-t-[#e9e9e9] border-b-transparent border-l-transparent border-r-transparent rounded-bl-3xl"
          data-v-50279bc2=""
        >
          <a href="#" data-v-50279bc2=""
            ><div class="user-avt flex items-center" data-v-50279bc2="">
              <img
                src="https://avatars.githubusercontent.com/thuongtruong1009?v=2&amp;s=37"
                alt="avatar"
                class="rounded-full mr-2"
                data-v-50279bc2=""
              />
              <p class="text-sm cursor-pointer" data-v-50279bc2="">
                thuongtruong1009
              </p>
            </div></a
          ><a href="/about" class="" data-v-50279bc2=""
            ><i
              class="fas fa-chevron-right text-gray-400"
              data-v-50279bc2=""
            ></i
          ></a>
        </div>
      </div>
      <div
        class="home_conntainer grid grid-cols-3 rounded-3xl col-span-3 bg-[#E7E8F3]"
      >
        <div class="between-container col-span-2 bg-[#E7E8F3] py-5 pl-5 pr-2">
          <header
            class="flex justify-between items-center text-gray-500"
            data-v-cd2eed4a=""
          >
            <i class="fas fa-bars text-2xl px-2 hidden" data-v-cd2eed4a=""></i
            ><i
              class="fas fa-arrow-left px-2 cursor-pointer hover:text-black"
              data-v-cd2eed4a=""
            ></i
            ><i
              class="fas fa-arrow-right px-4 cursor-pointer hover:text-black"
              data-v-cd2eed4a=""
            ></i>
            <div
              class="main-content__search-form flex justify-around px-5 py-2.25 rounded-2xl bg-white w-full cursor-pointer gap-2"
              data-v-cd2eed4a=""
            >
              <i class="fas fa-search search-btn" data-v-cd2eed4a=""></i
              ><input
                type="text"
                class="search-input outline-none border-none bg-transparent w-full placeholder-gray-400"
                placeholder="Search for artist, songs and..."
                data-v-cd2eed4a=""
              />
            </div>
            <i class="fas fa-bars text-2xl px-4 hidden" data-v-cd2eed4a=""></i>
          </header>
          <div class="pt-4 pb-1 subHeading">
            <p class="mb-0">
              What's hot
              <span data-v-cd2eed4a=""
                ><img
                  src="../assets/fire.png"
                  alt="fire_icon"
                  width="16px"
                  height="16px"
                  data-v-cd2eed4a=""
              /></span>
            </p>
          </div>
          <div class="table_header2">
            <h4>Trending</h4>
            <span>More ></span>
          </div>
          <div class="banner">
            <p class="content_artist">Artist</p>
            <h4 class="content_des">On Top Of The World</h4>
            <div class="content_action">
              <div class="action_btn">
                <button class="play_btn">PLAY</button
                ><button class="follow_btn">FOLLOW</button>
              </div>
              <span class="description"
                >Monthly listeners
                <p class="font-medium">50.000</p></span
              >
            </div>
          </div>
          <div class="table_header">
            <h4>Top 100 VN</h4>
            <span>Show all</span>
          </div>
          <div class="overflow-y-scroll h-50 my-1">
            <v-data-table
              :headers="headers"
              @click:row="changeSong"
              :items="desserts"
              hide-default-footer
              class="songsList"
            ></v-data-table>
          </div>
          <div class="play-song p-3 bg-white rounded-lg" data-v-cd2eed4a="">
            <div
              class="play-control grid grid-cols-3 justify-between items-center"
              data-v-cd2eed4a=""
            >
              <div
                class="play-control__act flex justify-start items-center text-gray-500 gap-2"
                data-v-cd2eed4a=""
              >
                <div class="p-1 rounded-md" data-v-cd2eed4a="">
                  <i class="far fa-heart" data-v-cd2eed4a=""></i
                  ><i
                    class="fas fa-heart text-red-600"
                    data-v-cd2eed4a=""
                    style="display: none"
                  ></i>
                </div>
                <div class="p-1 rounded-md" data-v-cd2eed4a="">
                  <i class="fas fa-music" data-v-cd2eed4a=""></i>
                </div>
                <div class="p-1 rounded-md" data-v-cd2eed4a="">
                  <i class="fas fa-expand-alt" data-v-cd2eed4a=""></i>
                </div>
              </div>
              <div
                class="play-control__main flex justify-center items-center gap-2"
                data-v-cd2eed4a=""
              >
                <div
                  class="text-gray-500 text-sm"
                  data-v-cd2eed4a=""
                  @click="playAgain()"
                >
                  <i class="fas fa-redo-alt play-repeat" data-v-cd2eed4a=""></i>
                </div>
                <div class="" data-v-cd2eed4a="">
                  <i
                    class="fas fa-fast-backward play-backward main-icon"
                    data-v-cd2eed4a=""
                  ></i>
                </div>
                <div class="" data-v-cd2eed4a="">
                  <i
                    class="fas fa-pause-circle text-3xl"
                    id="fa-pause"
                    @click="toggleSound()"
                    data-v-cd2eed4a=""
                    style="display: none"
                  ></i
                  ><i
                    class="fas fa-play-circle text-3xl"
                    id="fa-play"
                    @click="toggleSound()"
                    data-v-cd2eed4a=""
                  ></i>
                </div>
                <div class="" data-v-cd2eed4a="">
                  <i
                    class="fas fa-fast-forward play-forward main-icon"
                    data-v-cd2eed4a=""
                  ></i>
                </div>
                <div class="text-gray-500 text-sm" data-v-cd2eed4a="">
                  <i class="fas fa-random shuffle-song" data-v-cd2eed4a=""></i>
                </div>
              </div>
              <div
                class="play-control__volume flex justify-end items-center text-gray-500"
                data-v-cd2eed4a=""
              >
                <div data-v-cd2eed4a="">
                  <i class="fas fa-volume-down" data-v-cd2eed4a=""></i>
                </div>
                <div class="slidecontainer1 relative" data-v-cd2eed4a="">
                  <span
                    class="w-[90%] h-0.25 bg-red-500 absolute top-1/2 left-1"
                    data-v-cd2eed4a=""
                  ></span
                  ><input
                    type="range"
                    min="1"
                    max="100"
                    value="100"
                    class="slider1 bg-transparent"
                    id="myRange1"
                    @change="updateVolume()"
                    data-v-cd2eed4a=""
                  />
                </div>
                <div data-v-cd2eed4a="">
                  <i class="fas fa-volume-up text-sm" data-v-cd2eed4a=""></i>
                </div>
              </div>
            </div>
            <div
              class="play-seekbar flex justify-between items-center text-gray-500 text-sm"
              data-v-cd2eed4a=""
            >
              <div class="timer__left" data-v-cd2eed4a="">
                {{ currentSecondsDisplay }}
              </div>
              <div class="slidecontainer2 relative" data-v-cd2eed4a="">
                <span
                  class="w-full h-0.75 bg-gray-500 absolute top-1/2 left-0"
                  data-v-cd2eed4a=""
                ></span
                ><input
                  type="range"
                  :value="currentSeconds"
                  min="0"
                  :max="durationSeconds"
                  class="slider2"
                  id="myRange2"
                  @change="seek()"
                  data-v-cd2eed4a=""
                />
              </div>
              <audio
                src="../assets/dummy_audio.mp3"
                loop
                id="audio"
                muted
                ref="audio"
                data-v-cd2eed4a=""
              ></audio>
              <div class="timer__right" data-v-cd2eed4a="">
                {{ durationSecondsDisplay }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="right-container rounded-r-3xl col-span-1 bg-[#E7E8F3] p-5"
          data-v-060adb97=""
        >
          <div class="sidebar__shortcuts" data-v-060adb97="">
            <p
              class="sidebar__shortcuts-title font-bold pt-2"
              data-v-060adb97=""
            >
              Shortcuts
              <i
                class="fas fa-stream js-hide-sidebar hidden"
                data-v-060adb97=""
              ></i>
            </p>
            <div class="sidebar__shortcuts-items" data-v-060adb97="">
              <span class="sidebar__shortcuts-item bg-white" data-v-060adb97=""
                >Chill
                <img
                  src="../assets/snow.png"
                  alt="../assets/snow.png_icon"
                  data-v-060adb97="" /></span
              ><span class="sidebar__shortcuts-item bg-white" data-v-060adb97=""
                >Hot
                <img
                  src="../assets/star.png"
                  alt="../assets/star.png_icon"
                  data-v-060adb97="" /></span
              ><span class="sidebar__shortcuts-item bg-white" data-v-060adb97=""
                >Piano instrumental
                <img
                  src="../assets/piano.png"
                  alt="../assets/piano.png_icon"
                  data-v-060adb97="" /></span
              ><span class="sidebar__shortcuts-item bg-white" data-v-060adb97=""
                >Jazz
                <img
                  src="../assets/jazz.png"
                  alt="../assets/jazz.png_icon"
                  data-v-060adb97="" /></span
              ><span class="sidebar__shortcuts-item bg-white" data-v-060adb97=""
                >Acoustic
                <img
                  src="../assets/ghitar.png"
                  alt="../assets/ghitar.png_icon"
                  data-v-060adb97=""
              /></span>
            </div>
          </div>
          <div class="sidebar__favorite" data-v-060adb97="">
            <p class="sidebar__favorite-title" data-v-060adb97="">
              Favorite Artists
            </p>
            <div
              class="sidebar__favorite-list flex justify-between items-center p-1.5 text-sm"
              data-v-060adb97=""
            >
              <div
                class="artist-info__avt flex items-center"
                data-v-060adb97=""
              >
                <img
                  src="../assets/tóc-tiên.jpg"
                  alt=""
                  class="w-8 h-8 rounded-full"
                  data-v-060adb97=""
                />
                <div class="artist-info ml-2" data-v-060adb97="">
                  <h4
                    class="artist-info__name font-semibold text-xs"
                    data-v-060adb97=""
                  >
                    Tóc Tiên
                  </h4>
                  <p
                    class="artist-info__song text-xs text-gray-500"
                    data-v-060adb97=""
                  >
                    6 songs in library
                  </p>
                </div>
              </div>
              <div
                class="text-gray-400 text-xs cursor-pointer"
                data-v-060adb97=""
              >
                <i class="fas fa-ellipsis-h" data-v-060adb97=""></i>
              </div>
            </div>
            <div
              class="sidebar__favorite-list flex justify-between items-center p-1.5 text-sm"
              data-v-060adb97=""
            >
              <div
                class="artist-info__avt flex items-center"
                data-v-060adb97=""
              >
                <img
                  src="../assets/tóc-tiên.jpg"
                  alt=""
                  class="w-8 h-8 rounded-full"
                  data-v-060adb97=""
                />
                <div class="artist-info ml-2" data-v-060adb97="">
                  <h4
                    class="artist-info__name font-semibold text-xs"
                    data-v-060adb97=""
                  >
                    Tóc Tiên
                  </h4>
                  <p
                    class="artist-info__song text-xs text-gray-500"
                    data-v-060adb97=""
                  >
                    6 songs in library
                  </p>
                </div>
              </div>
              <div
                class="text-gray-400 text-xs cursor-pointer"
                data-v-060adb97=""
              >
                <i class="fas fa-ellipsis-h" data-v-060adb97=""></i>
              </div>
            </div>
            <div
              class="sidebar__favorite-list flex justify-between items-center p-1.5 text-sm"
              data-v-060adb97=""
            >
              <div
                class="artist-info__avt flex items-center"
                data-v-060adb97=""
              >
                <img
                  src="../assets/tóc-tiên.jpg"
                  alt=""
                  class="w-8 h-8 rounded-full"
                  data-v-060adb97=""
                />
                <div class="artist-info ml-2" data-v-060adb97="">
                  <h4
                    class="artist-info__name font-semibold text-xs"
                    data-v-060adb97=""
                  >
                    Tóc Tiên
                  </h4>
                  <p
                    class="artist-info__song text-xs text-gray-500"
                    data-v-060adb97=""
                  >
                    6 songs in library
                  </p>
                </div>
              </div>
              <div
                class="text-gray-400 text-xs cursor-pointer"
                data-v-060adb97=""
              >
                <i class="fas fa-ellipsis-h" data-v-060adb97=""></i>
              </div>
            </div>
            <div
              class="sidebar__favorite-list flex justify-between items-center p-1.5 text-sm"
              data-v-060adb97=""
            >
              <div
                class="artist-info__avt flex items-center"
                data-v-060adb97=""
              >
                <img
                  src="../assets/tóc-tiên.jpg"
                  alt=""
                  class="w-8 h-8 rounded-full"
                  data-v-060adb97=""
                />
                <div class="artist-info ml-2" data-v-060adb97="">
                  <h4
                    class="artist-info__name font-semibold text-xs"
                    data-v-060adb97=""
                  >
                    Tóc Tiên
                  </h4>
                  <p
                    class="artist-info__song text-xs text-gray-500"
                    data-v-060adb97=""
                  >
                    6 songs in library
                  </p>
                </div>
              </div>
              <div
                class="text-gray-400 text-xs cursor-pointer"
                data-v-060adb97=""
              >
                <i class="fas fa-ellipsis-h" data-v-060adb97=""></i>
              </div>
            </div>
          </div>
          <div class="sidebar__suggest-album cursor-pointer" data-v-060adb97="">
            <div
              class="suggest-album bg-white p-0.25 rounded-lg"
              data-v-060adb97=""
            >
              <div class="split third" data-v-060adb97="">
                <div class="cover" data-v-060adb97="">
                  <img src="../assets/ngô-lan-hương.jpg" data-v-060adb97="" />
                </div>
              </div>
              <div
                class="suggest-album__content flex justify-between px-3 py-1"
                data-v-060adb97=""
              >
                <div class="suggest-album__info text-xs" data-v-060adb97="">
                  <h4 class="font-semibold" data-v-060adb97="">
                    Anh muốn đưa em về không
                  </h4>
                  <p data-v-060adb97="">Ngô Lan Hương</p>
                </div>
                <i class="far fa-plus-square" data-v-060adb97=""></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    file: {
      type: String,
      default: null,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    headers: [
      {
        text: "#",
        align: "center",
        value: "songid",
      },
      { text: "TITLE", align: "center", value: "title" },
      { text: "ARTIST", align: "center", value: "artist" },
      { text: "TIME", align: "center", value: "time" },
    ],
    desserts: [
      {
        songid: 1,
        title: "Song 1",
        artist: "Singer 1",
        time: "1:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 2,
        title: "Song 2",
        artist: "Singer 2",
        time: "2:20 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 3,
        title: "Song 3",
        artist: "Singer 3",
        time: "2:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 4,
        title: "Song 4",
        artist: "Singer 4",
        time: "3:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 1,
        title: "Song 1",
        artist: "Singer 1",
        time: "1:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 2,
        title: "Song 2",
        artist: "Singer 2",
        time: "2:20 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 3,
        title: "Song 3",
        artist: "Singer 3",
        time: "2:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 4,
        title: "Song 4",
        artist: "Singer 4",
        time: "3:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 1,
        title: "Song 1",
        artist: "Singer 1",
        time: "1:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 2,
        title: "Song 2",
        artist: "Singer 2",
        time: "2:20 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 3,
        title: "Song 3",
        artist: "Singer 3",
        time: "2:50 mins",
        file: "dummy_audio.mp3",
      },
      {
        songid: 4,
        title: "Song 4",
        artist: "Singer 4",
        time: "3:50 mins",
        file: "dummy_audio.mp3",
      },
    ],
    currentTime: "00:00",
    audio: undefined,
    duration: 0,
    currentSeconds: 0,
    currentSecondsDisplay: "00:00",
    durationSeconds: 0,
    durationSecondsDisplay: "00:00",
    innerLoop: false,
    loaded: false,
    playing: false,
    previousVolume: 35,
    showVolume: false,
    volume: 100,
  }),
  computed: {
    currentTimeSec() {
      return this.convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime() {
      return this.convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    muted() {
      return this.volume / 100 === 0;
    },
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    volume() {
      this.showVolume = false;
      this.audio.volume = this.volume / 100;
    },
  },
  methods: {
    convertTimeHHMMSS(val) {
      let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

      return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
    },
    updateVolume() {
      this.audio.volume = document.getElementById("myRange1").value / 100;
    },
    toggleSound() {
      let audio = this.$refs.audio;
      let pause = document.getElementById("fa-pause");
      let play = document.getElementById("fa-play");
      if (pause.style.display === "none") {
        play.style.display = "none";
        pause.style.display = "block";
      } else {
        play.style.display = "block";
        pause.style.display = "none";
      }
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    download() {
      this.stop();
      window.open(this.file, "download");
    },
    changeSong(item) {
      this.toggleSound();
      this.audio.src = require("@/assets/" + item.file);
      this.playAgain();
      this.toggleSound();
    },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        this.durationSecondsDisplay = this.convertTimeHHMMSS(
          this.durationSeconds
        );
        return (this.playing = this.autoPlay);
      }

      throw new Error("Failed to load sound file.");
    },
    playAgain() {
      this.audio.currentTime = 0;
      this.currentTime = 0;
      this.currentSecondsDisplay = "00:00";
      document.getElementById("myRange2").value = 0;
    },
    mute() {
      if (this.muted) {
        return (this.volume = this.previousVolume);
      }

      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek() {
      if (!this.playing) {
        return;
      }
      let seekbar = document.getElementById("myRange2");
      this.audio.currentTime = seekbar.value;
      this.currentSeconds = this.audio.currentTime;
      this.currentSecondsDisplay = this.convertTimeHHMMSS(this.currentSeconds);
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    update() {
      this.currentSeconds = parseInt(this.audio.currentTime);
      // let seekbar = document.getElementById("myRange2");
      // seekbar.value = this.currentSeconds;
      this.currentSecondsDisplay = this.convertTimeHHMMSS(this.currentSeconds);
    },
  },
  created() {
    this.innerLoop = this.loop;
  },
  mounted() {
    this.audio = this.$refs.audio;
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
  },
};
</script>
