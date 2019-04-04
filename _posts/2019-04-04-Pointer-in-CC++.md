---
layout: post
title:  "C/C++에서의 포인터 표기법"
image: ''
date:   2019-04-04 15:28:00
tags:
- C
- language
- pointer
description: 'Pointer 표기'
categories:
- tech
---

## `int *p;`와 `int* p;` 중 무엇으로 써야할까?

혼자서 C 공부를 하던 중, 포인터 표기에 대해 의문점이 생겼다. 인터넷 강의를 통해 공부하고 있었는데, 어떤 곳에서는 `int *p;`로 표기하고 또 다른 곳에는 `int* p;` 로 포인터를 표기하고 있었다. 여기에 의문이 생겨 자료를 좀 찾아본 결과 이 [문서](http://www.stroustrup.com/bs_faq2.html#whitespace)를 발견하였다.

------

## 무슨 차이인가?

결론부터 말하자면 **기능상의 차이는 없다**.

{% highlight C %}
int *p;
int* p;
int * p;
int*p;
{% endhighlight %}

처음 의문의 출발점이었던 두 표기법과 더불어 추가로 아래의 두 줄까지 더해, 위의 네 가지 코드는 같은 기능을 한다.

처음에 언급한 문서에 따르면,

> The choice between `int* p;` and `int *p;` is not about right and wrong, but about style and emphasis.
>
> [^url]: <http://www.stroustrup.com/bs_faq2.html#whitespace>
>
> 

라고 한다. 네 가지 표기법은 옳고 그름의 문제가 아니라 스타일과 강세, 즉 '어디에 방점을 찍을 것인가'의 차이이다.

- `int *p;` 는 구문(syntax)을 강조한다. "`*p`는 `int`이다"
- `int* p;` 는 타입을 강조한다. "`p`는 `int`에 대한 포인터이다"

어느 쪽도 틀리지는 않다. C나 C++를 사용해 프로젝트를 진행해 본 적이 없는 나로서는 무엇이 나은지 가늠하기 힘들다.

다만 한 줄에 여러 변수를 선언할 때 이것들이 문제가 된다.

{% highlight C %}
int* p, p1;	// p1은 int*인가?
int *p, p1;	// error?
{% endhighlight %}

위와 같은 선언은 혼란을 일으킨다.

좋은 방법은 한 줄에 하나의 선언을 하는 것이다 :

{% highlight C %}
int* p = &i;
int p1 = p; // compile error
{% endhighlight %}

이를 통해 혼란을 방지할 수 있고, 컴파일러가 내뱉는 오류를 쉽게 고칠 수 있을 것이다.