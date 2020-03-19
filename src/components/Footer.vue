<template>
    <footer>
        <div class="left">
            <img src="@/assets/images/logo.svg" alt="DSC logo">
            <p>Developer Student Clubs, a program under the Google Developers, is an international community of students from various chapters who shares a common interest in technology.</p>
            <div class="social-icons">

            </div>
        </div>
        <div class="right">
            <div id="about">
                <h4>About</h4>
                <ul>
                    <li>Vision</li>
                    <li>Mission</li>
                    <li>Executive Board</li>
                    <li>Department Structure</li>
                </ul>
            </div>
            <div id="event">
                <h4>Events</h4>
                <ul>
                    <li>Featured Events</li>
                </ul>
            </div>
            <div id="chapters">
                <h4>Chapters</h4>
                <ul>
                    <li>DSC Chapters</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background: #fff;
    padding: 50px 120px 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left p {
    padding: 25px 0;
}

.left .social-icons {
    display: flex;
}

.right {
    display: flex;
}

.right div {
    margin-right: 100x;
}

ul {
    list-style: none;
    line-height: 30px;
}
</style>
