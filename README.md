<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
# graphql_shop-k6-load-testing

<h3>Install K6 on you computer<h3>
Mac:
<ul>
  <li>Install Homebrew:&nbsp;&nbsp;$<code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" </code>&nbsp;&nbsp; in cace that you doesn't have Homebrew</li>
  <li>Open terminal:</li>
  <ul>
    <li><code>sudo -i</code></li>
    <li><code>brew install k6</code></li>
    <li><code>git@github.com:navPersia/graphql_shop-k6-load-testing.git</code></li>
    <li><code>cd graphql_shop-k6-load-testing</code></li>
    <li><code>k6 run script.js</code></li>
  </ul>
</ul>
  <hr>
  Windows:
  <ul>
  <li>Install k6:&nbsp;&nbsp;$<code>winget install k6</code></li>
  <li>Open terminal:</li>
  <ul>
    <li><code>git@github.com:navPersia/graphql_shop-k6-load-testing.git</code></li>
    <li><code>cd graphql_shop-k6-load-testing</code></li>
    <li><code>k6 run script.js</code></li>
  </ul>
</ul>
  <hr>
  <h3>Output:</h3>
  <div>
    <img src="https://k6.io/docs/static/b5868f5174d8013deff526f28605e36c/bdf18/k6-results-stdout.png" alt="k6 output" class="center">
  </div>
