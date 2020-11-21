# Simple RESTful API

## TODO
- Add `DELETE` product route

```sh
curl -X DELETE "http://localhost:3000/delete-product" -d name="Apple"
```

- Add `UPDATE` product route (to change quantity or price)

```sh
curl -X PATCH "http://localhost:3000/update-product" -d name="Apple" -d price=40
```

```sh
curl -X PATCH "http://localhost:3000/update-product" -d name="Apple" -d qty=60
```
