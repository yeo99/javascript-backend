// 내장 모듈은 경로 안잡아줘도 됨
const express = require('express');
// unique한 id추출하는데 사용되는 라이브러리
const uuid4 = require('uuid4');
console.log(uuid4());


// package.json
/**
 * package.json에 기입된 버전 기호에 따라 라이브러리의 새로운 버젼이 나왔을 시
 * npm update를 치면 package.json의 정보에 따라 업데이트를 한다.
 * scripts부분을 수정하여서 명령어를 만들 수 있다.
 */

// package-lock.json?
/**
 * ex.
 * 만약에 express는 lodash3에 최적화 되어있고
 * uuid4는 lodash4에 최적화 되어있다면?
 * 각 라이브러리의 하위에 참조하는 버전의 라이브러리들들이 명시되어있다.
 */