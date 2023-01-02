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
    <div class="fixed top-0 left-0 bg-neutral/90 w-full h-full flex justify-center items-center">
        <div class="w-[50%] h-[50%] p-2 border-2 rounded-md bg-secondary flex flex-col justify-around">
            <div class="flex justify-center">
                <img 
                    src="/src/assets/logo.svg" 
                    alt="app-logo"
                    class="w-14" />
            </div>
            <div class="h-[65%]">
                <h2 class="text-center text-2xl underline">Results</h2>
                <div class="flex flex-col h-full mt-5 items-center font-nunito text-lg">
                    <p>Test: </p>
                    <p>Time Taken: </p>
                    <p>Words Per Minute: </p>
                    <p>Accuracy: </p>
                </div>
            </div>
            <div class="flex justify-center space-x-2">
                <button 
                    class="inline-flex daisyui-btn daisyui-btn-sm rounded-full space-x-1" 
                    @click="closePerformanceModal">
                    <span>Close</span>
                    <i class="material-icons">close</i>
                </button>
                <button 
                    class="inline-flex daisyui-btn daisyui-btn-sm rounded-full space-x-1" 
                    @click="closePerformanceModal">
                    <span>Go Again</span>
                    <i class="material-icons">replay</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "PerformanceModalComp",
    setup: function(props, context) {
        function closePerformanceModal() {
            context.emit("closePerformanceModal");
        }

        return {
            closePerformanceModal
        }
    }
}
</script>