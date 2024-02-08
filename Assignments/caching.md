### CACHING STRTEGIES

- <INS> CACHE-ASIDE

It checks for the data in the cache and if it is not there (cache miss) then the application fetches data from the datastore. Before returning data to the application it updates the cache and then returns data to the application.

- <INS> READ-THROUGH

Read-through is a strategy where applications do not have direct access to the permanent storage (Eg: database) but instead always interact with the cache API. If there is a cache miss then the cache API will fetch the data from the storage, update it in the cache and then return the data to the application.

- <INS> WRITE-THROUGH

As the name indicates this caching strategy writes the data to the database through the cache. During a write operation data is first written to the cache and then to the database at the same time, hence the cache will be in sync with the database. The benefit of write-through is the data in the cache is never stale.

- <INS> WRITE-BEHIND

Write-behind is mostly similar to write-through but the only difference is data will not write immediately to the database but the cache layer connects to the database and updates the database in bulk on a timeout or after a certain interval of time or even during any specific event.

### CACHE CLEARING STATEGIES

- <INS> LRU
  - Not used Recently
- <INS> LFU
  - Not used More no of times
- <INS> TTL
  - Every cache is stamped with a expiry date.Once that time limit is reached, the entry is evicted, no matter how frequently or recently it was accessed.
