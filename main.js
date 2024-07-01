<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="AngularRoutes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/ccpalmetto/registrarAlmacenes/front/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>