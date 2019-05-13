---
# title: Farzad Abdolhosseini | Personal Webpage
layout: page
# feature_image: "https://picsum.photos/1300/400?image=872&blur=2"
# feature_image: "/assets/img/seagull.jpg"
feature_image: "/assets/img/scene1.jpg"
# feature_text: |
#   ## Farzad Abdolhosseini
#   _MSc Student at UBC_
---

## Hi, I'm Farzad!

I am a second-year MSc student in the [department of Computer Science](http://cs.ubc.ca/) at the University of British Columbia studying Reinforcement Learning under supervision of [Prof. Michiel van de Panne](http://cs.ubc.ca/~van/).\\
I like exploring new stuff and learning everything that comes my way!

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