<!--
 Copyright 2022 Bikathi Martin
 
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
    <div class="flex">
        <div class="flex flex-col w-1/3 justify-center px-2 space-y-2">
            <div class="controls-div">
                <h1>Controls</h1>
            </div>
            <timer-comp />
        </div>
        <div class="working-div">
            <h1>some heading</h1>
        </div>
    </div>
</template>

<script lang="js">
import TimerComp from './TimerComp.vue'
import { ref } from 'vue'

export default {
    name: "ParagraphComp",
    components: {
        TimerComp
    },
    setup: function() {
        // reactive data
        const gameState = ref('pause');

        // functions
        function toogleGameState() {
            gameState.value === "pause" ? 
                gameState.value = "play" : gameState.value = "pause" 
        }

        return {
            gameState, toogleGameState
        }
    }
}
</script>