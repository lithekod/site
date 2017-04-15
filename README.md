# LiTHe kod website
Website for the LiTHe kod organisation at LiU.
Built using [Hugo](http://gohugo.io/) static file generator written in Go.

The styling is heavliy based on a fork of [Lanyon](https://github.com/tummychow/lanyon-hugo), a theme to Jekyll.

## Development
Make sure to have Hugo installed in your system, it should be available in most package managers.

### Development server
If you want to view local changes to the site then you can use the Hugo webserver

```
hugo serve
```

make sure to use `--buildDrafts` if you want to preview any draft pages.

### Deployment
To deploy the site to Github pages (which is where we are hosting it) simply run the `deploy.sh` in the root directory ( **Make sure that you stand in root** )

