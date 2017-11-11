import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'


class Blog002 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // onExpand () {
    //     this.props.handleExpand()
    //     //this.props.numClicked(this.props.value)
    // }

    render (){
        console.log('expanded', this.state.expanded)
        return (
            <div>
            <ReactMarkdown source={input} />
            </div>
        )
    }
}

const input = `

## Why I decided to be a entrepreneur ? \n

I like trying something difficult, especially something people hesitate to try because of its difficulty. In Japan, being an entrepreneur hasn’t been perceived by most people. They think startups have too much risk to try, and too difficult to challenge. Actually, according to a survey by OECD, only 7% of the Japanese declared that they would rather take the risk and start up their own business than work for someone else, compared to 50% of Americans. \n

## Why do the Japanese have a big fear for taking risks? \n 


From my perspective, Japanese society and education generates these kind of fears. \n 
Changing jobs looks bad in Japanese society, especially among old generations. They see people changing jobs every couple of years as with no patience, and lack of sociability. Actually, when a company searched how many people at the age of 60 haven’t changes jobs in their lifetime, around 50% of the Japanese stayed with the same company after their graduation. Working for the same company for decades makes you a specialist of the company but you don’t develop the skills of getting a job quickly, so then you don’t have any career stability. Japanese also have fears that they can’t make a life for themselves outside of this country because they can’t speak English and they don’t have experience working or studying abroad. 
Japanese education culture also has a bad effect on English education. Students develop a feeling of failure, inferiority and shame about making a mistake. Japanese students tend to hesitate to make mistakes which often prevents them even from using English phrases and expressions they are learning in school. These cultures increases Japanese fears for taking risks. \n

## Is it true that being an entrepreneur has high risk? \n

I don’t think so. \n
I have never seen any Japanese person who has passed away because they can’t find any job!
Making your own business from nothing gives you huge chance to learn something new and challenge opportunities.
So I decided to try it! \n

## Why we are targeting “communication” ? \n

Because I want to make Japanese society better. I feel a lot of Japanese don’t perceive globalization in Japan while Japanese economics are becoming higher in globalization.  Let me give you two remarkable examples from my experiences.

1 Japanese want to speak English but they don’t know when and how. \n

The population of Tokyo is around 14 million, around 4% of them, or 4.4 million, are non-Japanese. The number is smaller than the U.S., and it is home to about one-in-five international immigrants. But still there are some in Japan. Let me say if you are in school with 100 students, three people among them are from other countries. \n
A lot of Japanese people try to learn English. Around 20% of elementary school students in Japan go to English conversation classes after school. In high school, they have English classes almost everyday. In spite of a lot of effort for English education, most of them, maybe more than 95%, can’t speak English. If you work for a Japanese company, you don’t have a chance to use English to talk to or meet non-Japanese and then they forget the words and phrases. \n

2 Lack of practical English skills \n
It’s common to take national English exams to show their English skills to companies in order to get a job, for instance TOEIC or TOEFL. Some Japanese companies ask students to show their score in an interview but having a good score in these tests doesn’t lead you to speaking English any better. There are a lot of Japanese people who get scores of more than 800/900 points (You can show off your English skill to other Japanese people with this score in Japan!) but most of them can’t speak English to introduce themselves. \n

## Why we are targetting ‘Tour Providers’? \n

We feel there are opportunities for connecting travelers with local Japanese people.
The number of tourists coming to Japan is a whopping 24 million last year in 2016, the government wants to keep what’s left of the momentum so it can achieve the target it set last March of accepting 40 million visitors by 2020. Let me say the average length of one visitor staying in Japan is for one week, it can be said that around 5 billion visitors would be in Japan everyday, one-third of the population in Tokyo, 14 million in this year. If you have a chance to communicate with them, it helps to get rid of  extreme fears of the Japanese talking to non-Japanese in their second language and then it would remove an inferiority complex among the Japanese when it comes to their English skills.  \n

## Why we think there is a big demand? \n

Because we had offline interviews with 200 visitors in Japan.
We visited the top 5 popular sightseeing places in Tokyo and had face-to-face interviews with travelers. It took 8 hours each day for one week in total. We asked around 10 questions but these two questions should be noted:  \n

### 1 If you join a tour, do you mind a non-Japanese guide? Do you prefer a Japanese guide if their english is not so fluent? \n

80% of  the tourists prefer a local Japanese guide. They don’t care whether the guide speaks their native language fluently or not. They care more about whether the guides can show them something interesting that the tourists don’t know.

### 2 Why don’t you want to join a tour? \n

Expensive. It costs 8000 yen on average in Japan because most of the tours are private.
Last-minute booking is mostly not accepted currently. If you want to book a tour provided by a big travel agency, you need to contact them one or two weeks in advance. But 40% of the tourists don’t plan anything aside from flights and accommodations before they leave their home. \n

After these interviews, we decided to develop something to solve problem that people can’t book tours at the last-minute, especially for non- wealthy people. \n

This is the concept of Jimoto. \n

### 1 Not private but shared tours \n
We will provide shared tours with different traveler groups. It gives more and more people a chance to join a tour because it decreases the price by one-fourth to one-fifth. It’s a 75% PRICE DISCOUNT! \n
### 2 No need to plan anything, you can book at the last minute. \n
We will accept last-minute booking. You can book a tour in one minute. You can join a tour TODAY! \n 
### 3 Targeting Japanese guides \n
Focusing on Japanese guides, not expats in Japan. The Japanese government is going to change the laws of guides for tourists. Anyone will be able to earn money through guiding visitors by next January in 2018. We should use these changes in the system. \n


It’s my first challenge to develop, make a business, and run a company. I’m also challenging what we are facing everyday.  I’m a Japanese woman founder based in Tokyo. We are a great team with great non-Japanese programmers. We are moving forward everyday to make this project more acceptable and change our society and make people happier through it. \n



* The Number of Travelers in Japan
http://www.metro.tokyo.jp/tosei/hodohappyo/press/2017/05/19/05.html

* Population in Tokyo
http://www.toukei.metro.tokyo.jp/jsuikei/js-index.htm

* Entrepreneurial perceptions
http://www.oecd-ilibrary.org/docserver/download/3015021e.pdf?expires=1507333717&id=id&accname=guest&checksum=03D2E943BACE95F84CD3FFFD2F3368E4

* Occupation lifetime in Japan
http://www.mhlw.go.jp/wp/hakusyo/roudou/14/dl/14-1-3.pdf

* Risk Averse Culture or Adverse Risk/Reward Ratio?
http://toyokeizai.net/articles/-/142464



`

// not expanded: card width 50%
// expanded: card width 100%
// photo should be downloaede not lorempixel because it takes time to load

export default Blog002
