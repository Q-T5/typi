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
    <div class="h-screen">
        <nav class="h-[8%] shadow flex px-2 justify-between">
            <div class="inline-flex items-center">
                <img src="/src/assets/logo.svg" alt="app-logo" class="w-10" />
                <span class="logo-text">Typi</span>
            </div>
            <div class="flex items-center space-x-2">
                <a 
                    href="https://www.paypal.com/donate/?hosted_button_id=X96ET3EGU2BNJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="nav-buttons">Paypal Donate</a>
                <a 
                    href="https://github.com/Q-T5/typi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="nav-buttons">Github Code</a>
            </div>
        </nav>
        <div class="h-[92%] flex flex-col justify-center px-10 space-y-5">
            <div>
                <h1 class="home-heading">Learn To Type</h1> <br />
                <h1 class="home-subheading" id="typewriter">Fast</h1>
            </div>
            <div class="w-[55%] max-w-[55%] flex flex-wrap">
                <p class="home-par">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium quas molestiae aperiam repellendus beatae in, voluptatum facilis? Nemo magni fuga nesciunt provident. Obcaecati fuga quas suscipit, maiores magnam porro?
                </p>
            </div>
            <div class="w-[30%] max-w-[30%]">
                <button class="get-started" @click="scrollDown">Get Started</button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import TypeWriter from 'typewriter-effect/dist/core'

export default {
    name: "HomeComp",
    setup: function(props, context) {
        // functions
        function scrollDown() {
            context.emit('scrollDown');
        }

        return {
            scrollDown
        }
    },
    mounted: function() {
        new TypeWriter('#typewriter', {
            strings: [
                "Faster",
                "Accurately",
                "More Efficiently",
                "With Your Eyes Closed"
            ],
            autoStart: true,
            loop: true,
            cursor: "_"
        });
    }
}
</script>