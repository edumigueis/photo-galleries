
 # Photo Galleries
> A collection of pure CSS3 galleries. Made using VueJS and CSS, the galleries in this project are:
- Masonry
- No Gutter Masonry
- Grid
- No Gutter Grid
- Hexagon Grid
- Row Masonry

[Link](https://google.com)
All the galleries in this project can be coppied, but the copyright notice in all the files must be maintained, as states the LICENSE. All images provided by Unsplash. Check out pictures of the project:
## Row Masonry
![](./src/assets/images/row-masonry.png)
## Masonry:
![](./src/assets/images/masonry.png)
## Grid:
![](./src/assets/images/grid.png)
## No Gutter Masonry
![](./src/assets/images/masonry-no-gutter.png)

## Using

If you don't want to download the project, you can access the files through GitHub and copy the css inside the style tag. The html is inside the <template> tag. Just remove the v-for and the :key attributes from the inner tag of the gallery wrapper and copy that tag many times. Like so:
```html
<div class="grid-wrapper">
      <div class="grid">
        <div class="block">
          <div class="image-mask">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80" alt="" />
          </div>
          <p class="description">Beautiful Image</p>
        </div>
        <div class="block">
          <div class="image-mask">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80" alt="" />
          </div>
          <p class="description">Beautiful Image</p>
        </div>
        ...
      </div>
    </div>
```
If you want to download the entire project. Follow the following steps. After downloading the project, you can go into a console and cd the main project folder:

```sh
cd photo-galleries
```

And, then:

```sh
npm run dev
```

## Histórico de lançamentos

* 0.2.1
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.2.0
    * MUDANÇA: Remove `setDefaultXYZ()`
    * ADD: Adiciona `init()`
* 0.1.1
    * CONSERTADO: Crash quando chama `baz()` (Obrigado @NomeDoContribuidorGeneroso!)
* 0.1.0
    * O primeiro lançamento adequado
    * MUDANÇA: Renomeia `foo()` para `bar()`
* 0.0.1
    * Trabalho em andamento

## Meta

Creator: Eduardo Migueis

Distributed under the MIT LICENSE. See `LICENSE` for more informaton.

[https://github.com/edumigueis/photo-galleries](https://github.com/edumigueis)
