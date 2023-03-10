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
            <div class="controls-div flex flex-col space-y-1">
                <h1 class="text-center text-xl">Options</h1>
                <div class="flex flex-col border-b border-t py-1">
                    <div class="w-fit daisyui-alert daisyui-alert-warning rounded-md">
                        <i class="material-icons">warning</i>
                        <p>For strict typing, check the option below</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <label>Disable Backspace/ Delete: </label>
                        <input type="checkbox" class="daisyui-checkbox border-gray-500 daisyui-checkbox-sm"
                        v-model="disableErasure" />
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class="daisyui-tooltip daisyui-tooltip-right" data-tip="Generate New Words">
                        <button class="daisyui-btn rounded-full daisyui-btn-sm w-fit" @click="generate">Generate</button>
                    </div>
                </div>
            </div>
            <timer-comp />
        </div>
        <div class="working-div flex space-y-2 items-center justify-center">
            <div class="w-[75%] max-w-[75%] justify-center h-[25%] flex flex-wrap text-xl font-nunito">
                <span v-for="(word, index) in words" :key="index" :class="word.class">
                    {{ word.letter === ' ' ? '&nbsp;' : word.letter }}
                </span>
            </div>
            <div class="w-[70%] flex justify-center flex-col space-y-1">
                <textarea 
                    type="text" 
                    class="user-input" 
                    placeholder="Type In Here"
                    rows="6"
                    v-model="userInput"
                    @keydown.delete="preventErase"
                    :disabled="baseSentence === '' "
                    :maxlength="baseSentence.length"></textarea>
                <div class="w-fit h-fit">
                    <button 
                        class="inline-flex daisyui-btn daisyui-btn-sm rounded-full space-x-1" 
                        :disabled="userInput.length !== baseSentence.length"
                        @click="showPerformanceModal">
                        <span>Done</span>
                        <i class="material-icons">check_circle</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { ref, computed, watch } from 'vue'
import { sentence } from 'txtgen'
import TimerComp from './TimerComp.vue'

export default {
    name: "WordComp",
    components: {
        TimerComp
    },
    setup: function(props, context) {
        // reactive data
        const disableErasure = ref(false);

        // the words are generated by doing a split(" ") on a sentence
        const baseSentence = ref("");
        const userInput = ref("");

        function generate() {
            userInput.value = "";
            baseSentence.value = sentence();
        }

        function preventErase(event) {
            if(disableErasure.value === true) {
                return event.preventDefault();
            }
        }

        // computed properties
        const words = computed(() => {
            const lettersArray = [];
            for(const letter of baseSentence.value) {
                lettersArray.push({
                    letter: letter,
                    class: ''
                })
            }
            return lettersArray;
        });

        // watchers
        watch(userInput, (newValue) => {
            // get how many characters the user has typed so far
            const lettersSoFar = newValue.length;
            // if the last letter in whatever the user has typed does not match
            // the letter at that index in the 'words' array, then they are not equal
            if(newValue.charAt(lettersSoFar - 1) !== words.value[lettersSoFar - 1].letter) {
                words.value[lettersSoFar - 1].class="text-red-500";
            } else {
                words.value[lettersSoFar - 1].class="text-green-500";
            }
        });

        // events
        function showPerformanceModal(event) {
            context.emit("showPerformanceModal");
            return event.preventDefault();
        }

        return {
            generate, words, userInput, baseSentence, preventErase, disableErasure,
            showPerformanceModal
        }
    }
}
</script>