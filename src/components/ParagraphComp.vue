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
                <div class="flex flex-col">
                    <div class="flex flex-col items-start justify-start space-x-2">
                        <label>Number of Paragraphs: {{ numberOfParagraphs }}</label>
                        <input type="range" min="1" max="5" v-model="numberOfParagraphs" class="daisyui-range daisyui-range-sm" />
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
        <div class="working-div flex space-y-1">
            <div class="h-3/4 w-full max-w-full flex flex-wrap max-h-[75%] overflow-y-scroll">
                <span v-for="(word, index) in words" :key="index" :class="word.class">
                    {{ word.word }} &nbsp;
                </span>
            </div>
            <div class="h-1/4 flex justify-center">
                <textarea 
                    type="text" 
                    class="user-input" 
                    placeholder="Start Typing"
                    rows="6"
                    v-model="userInput"
                    @keydown.delete="preventErase"
                    @keydown.space="validateProgress"
                    :disabled="baseArticle === '' "
                    :maxlength="baseArticle.length"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import TimerComp from './TimerComp.vue'
import { ref, computed } from 'vue'
import { paragraph, article } from 'txtgen'

export default {
    name: "ParagraphComp",
    components: {
        TimerComp
    },
    setup: function() {
        // reactive data
        const gameState = ref('pause');
        const numberOfParagraphs = ref(1);
        const baseArticle = ref("");
        const userInput = ref("");
        const wordsEntered = ref(0);
        const disableErasure = ref(false);

        // functions
        function toogleGameState() {
            gameState.value === "pause" ? 
                gameState.value = "play" : gameState.value = "pause" 
        }

        function generate() {
            wordsEntered.value = 0;
            if(numberOfParagraphs.value === 1) {
                baseArticle.value = paragraph();
            } else if(numberOfParagraphs.value > 1) {
                baseArticle.value = article([numberOfParagraphs.value]);
            }
        }

        function preventErase(event) {
            if(disableErasure.value === true) {
                return event.preventDefault();
            }
        }

        function validateProgress() {
            wordsEntered.value++;
            const lastWord = userInput.value.split(" ").pop();
            if(lastWord === words[wordsEntered.value - 1].word) {
                words[wordsEntered.value - 1].class = "text-green-500";
            } else {
                words[wordsEntered.value - 1].class = "text-red-500";
            }
        }

        // computed
        const words = computed(() => {
            const wordsArray = baseArticle.value.split(" ");
            const modifiedWordsArray = [];
            
            wordsArray.forEach((word) => {
                modifiedWordsArray.push({
                    word: word,
                    class: ""
                });
            });
            
            return modifiedWordsArray;
        });

        return {
            gameState, toogleGameState, numberOfParagraphs, generate, baseArticle, userInput,
            words, preventErase, validateProgress, userEnteredWords, disableErasure
        }
    },
    mounted: function() {
        // console.log(article([2]));
    }
}
</script>