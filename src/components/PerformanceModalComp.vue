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
    <div class="fixed top-0 left-0 bg-neutral/50 w-full h-full flex justify-center items-center">
        <div class="w-[50%] p-2 border-2 rounded-md bg-neutral text-white">
            <h2>Notification</h2>
            <p>Some filler text</p>
            <button class="daisyui-btn" @click="closePerformanceModal">close</button>
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