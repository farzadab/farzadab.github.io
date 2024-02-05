---
title: Hi, I'm Farzad,
layout: page
# feature_image: "https://picsum.photos/1300/400?image=872&blur=2"
# feature_image: "/assets/img/seagull.jpg"
# feature_image: "/assets/img/scene1.jpg"
# feature_text: |
#   ## Farzad Abdolhosseini
#   _MSc Student at UBC_
---

I'm a founding AI engineer at [Fixie](https://fixie.ai/) working on speech-language models.

I was previously at Apple in the machine intelligence neural design (MIND) team, working on computer vision and efficient learning and got my MSc at the [University of British Columbia, department of Computer Science](http://cs.ubc.ca/), studying Reinforcement Learning under supervision of [Prof. Michiel van de Panne](http://cs.ubc.ca/~van/).

<div style="display: flex; justify-content: center">
{% for item in site.navigation_footer %}
  {% if item[1].url contains '://' %}
  {% assign url = item[1].url %}
  {% else %}
  {% assign url = item[1].url | relative_url %}
  {% endif %}
    <a href="{{ url }}" title="{{ item[0] }}"><i class="mdi mdi-36px mdi-{{ item[1].icon }}"></i></a>
  {% if forloop.rindex0 > 0 %}&nbsp;&nbsp;|&nbsp;&nbsp;{% endif %}
{% endfor %}
</div>
