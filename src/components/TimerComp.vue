<!--
 Copyright 2023 Bikathi Martin
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<template>
    <div class="timer-div flex flex-col justify-between">
        <div class="w-full flex h-[96%] items-center justify-around">
            <h1 class="text-3xl">
                <span>{{ minutes }}</span>:<span>{{ seconds }}</span>
            </h1>
            <div class="daisyui-tooltip daisyui-tooltip-right" data-tip="Pause/ Play Game">
                <button class="timer-btn" @click="toogleGameState">
                    <i class="material-icons">{{ gameState === "pause" ? 'play_arrow' : 'pause' }}</i>
                </button>
            </div>
        </div>
        <div class="w-full h-[4%]">
            <progress class="daisyui-progress w-full"
                value="40"
                max="100"></progress>
        </div>
    </div>
</template>

<script lang="js">
import { ref } from 'vue'

export default {
    name: "TimerComp",
    setup: function() {
        // reactive data
        const gameState = ref('pause');
        const minutes = ref("00");
        const seconds = ref("00");

        // functions
        function toogleGameState() {
            gameState.value === "pause" ? 
                resume() : pause();
        }

        function pause() {
            gameState.value = "pause";
        }

        function resume() {
            gameState.value = "play";
        }

        function countdown() {
            
        }

        return {
            gameState, toogleGameState, minutes, seconds, pause, resume, countdown,
        }
    }
}
</script>