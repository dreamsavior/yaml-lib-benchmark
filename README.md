# yaml-lib-benchmark
Performance test for Node's YAML library: https://www.npmjs.com/package/yaml

# How to setup
- Download this repo and install the dependencies using `npm install`
- Use npm command normally to switch between YAML versions
```shell
npm install yaml@2.2.1
```

# How to run
```shell
npm run start
```

The result would be:
```shell
Testing YAML version 2.2.1
Working on file :  ./sample/Map002.yaml
File size :  389684 byte
Number of node :  36736
Test 1: parseDocument() x  [ 200 ]
Process took 77129.78080010414 ms.

Test 2: getIn() x  [ 5000 ]
Process took 14.584700107574463 ms.

Test 3: setIn() x  [ 5000 ]
Process took 23.482500076293945 ms.

Test 4: run ToString() x  [ 200 ]
Process took 12966.855200052261 ms.

Test 5: run toJSON() x  [ 200 ]
Process took 49244.08389997482 ms.

Total execution: 139378.7871003151 ms
```