<template>
  <div id="app">
    <div class="todo_list">
      <div>
        便签
      </div>
      <div class="todo_exe">
        <img src="../public/images/todo_list.png" alt="" @click="run_todolist()">
      </div>
    </div>
    <div class="clock">
      <div>
        时钟
      </div>
      <div class="clock_exe">
        <img src="../public/images/clock.png" alt="" @click="run_clock()">
      </div>
    </div>

    <div class="weather">
      <div>
        天气
      </div>
      <div class="weather_exe">
        <img src="../public/images/weather.png" alt="" @click="run_weather()"> 
      </div>
    </div>
  </div>
</template>

<script>

// import { ipcRenderer } from 'electron';
export default {
  name: 'App',
  components: {

  },
  methods: {
    run_todolist() {
      window.versions.ping1();
    },
    run_clock(){
      window.versions.ping2();
    },
    run_weather(){
      window.versions.ping3();
    }
  }
}
</script>

<style >
.todo_exe {
  width: 100%;
  height: 400px;
}

.todo_exe img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}

.clock_exe {
  width: 100%;
  height: 200px;
}

.clock_exe img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}

.weather_exe {
  width: 100%;
  height: 400px;
}

.weather_exe img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
</style>
