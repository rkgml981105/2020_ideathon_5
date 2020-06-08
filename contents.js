var qArray = ["1. 나쁜 꿈을 꾸면 그 날 안 좋은 일이 일어날까 조심할 때가 있다.",
"2. 버뮤다 삼각지대와 같은 세계의 미스터리를 찾아보는 것을 좋아한다.",
"3. 늘 가던 길보다 새로운 길로 가보는 것을 즐긴다.",
"4. 열린 결말로 끝나는 영화를 보고 나면 그 이후에 무슨 일이 일어날지 온갖 상상을 한다.",
"5. 샤프가 고장 났을 때 끝까지 고치기 위해 노력한다.",
"6. 신체적으로 건강한 편이거나 체육을 잘 한다.",
"7. 질서가 흐트러져 있는 물건들을 보면 정리하고 싶다.",
"8. 허무맹랑한 이야기보다는 현실성 있는 이야기를 하는 것을 좋아한다.",
"9. 여럿이 할 수 있는 일 보다 혼자서 할 수 있는 일이 더 재미있다.",
"10. 백지장도 맞들면 낫다.",
"11. 남들과는 상관 없이 내가 잘 됐으면 좋겠다.",
"12. 강아지가 고양이보다 좋다.",
"13. 어떠한 분야에 한 번 깊이 빠지면 잘 헤어나오지 못한다.",
"14. 하나의 취미를 가질 수 있다면 나는 역동적인 레저스포츠보다는 조용한 곳에서 책을 읽는 것을 택할 것이다.",
"15. 다른 사람들과 같이 하나의 일을 완성하는 것이 힘들다.",
"16. 어떤 면에서든 근본적인 문제를 찾아 해결하려 노력한다.",
"17. 혼자 공부하는 것보다 조별 과제를 좋아한다.",
"18. 조별 과제에서 발표를 주로 담당한다.",
"19. 무엇이든지 꼭 이기려고 하는 강한 승부욕을 가졌다.",
"20. 한 자리에 진득하게 앉아 집중하지 못한다.",
"21. 데이터, 문자로 이루어진 결과물보다는 가시적인 결과물에 더 희열을 느낀다.",
"22. 영화/드라마 음악으로부터 자주 영감을 받는다.",
"23. 주위 사람들과 세상 모든것을 주의 깊게 관찰한다.",
"24. 자신의 아이디어가 마구마구 샘솟는 시간대를 알고 있다. ",
"25. 카톡, 이메일, DM 등에 쌓인 메시지들을 보면 참지 못하고 모두 읽거나 답한다.",
"26. 일정표 혹은 플래너를 작성한다.",
"27. 무언가를 구매할 때 충동적으로 구매하는 것이 아닌 신중하게 고민 후 구매한다.",
"28. 자신이 책임감 있다고 생각한다.",
];

var i;
for (i = 0 ; i < qArray.length ; i++){

    document.getElementsByClassName("questions")[i].innerHTML=qArray[i];
    document.getElementsByClassName("select")[i].innerHTML=`<span>전혀 아니다</span>
    <button class="b1"></button>
    <button class="b2"></button>
    <button class="b3"></button>
    <button class="b4"></button>
    <button class="b5"></button>
    <span>매우 그렇다</span>`

}