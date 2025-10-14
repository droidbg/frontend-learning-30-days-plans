# Submodule

## Add submodule

```bash
git submodule add <the-remote-url-you-copied> the-ts-files
```

```bash
git add .gitmodules the-ts-files
git commit -m "Add the-ts-files as a submodule"
git push
```

## Update submodule

```bash
git submodule update --remote
```
