# My Personal Webpage

## Usage
### Installing Dependencies
1. First, you need to install ruby and the ruby bundler (can be different based on the OS):
```bash
sudo pacman -S ruby rubygems ruby-bundler

## Or if you use the hated Ubuntu ...
# sudo apt install ruby-bundler
```

2. Install the dependencies:
```bash
bundle install  # might ask for your sudo password
```

3. (optional) Update the dependencies:
```bash
bundle update  # might ask for you sudo password
```

4. Run the server:
```bash
bundle exec jekyll serve
```

5. You should be able to view the webpage at http://127.0.0.1:4000/.

-------
Based on the starter kit for [Alembic](https://alembic.darn.es/).
